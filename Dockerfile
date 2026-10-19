FROM node:20-bookworm AS build
WORKDIR /app
ENV ONNXRUNTIME_NODE_INSTALL=skip PUPPETEER_SKIP_DOWNLOAD=true
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
ARG RAILWAY_GIT_COMMIT_SHA
RUN npm run build
FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production ONNXRUNTIME_NODE_INSTALL=skip PUPPETEER_SKIP_DOWNLOAD=true
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev --legacy-peer-deps --ignore-scripts
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
COPY --from=build /app/shared ./shared
COPY --from=build /app/contracts ./contracts
COPY --from=build /app/artifacts ./artifacts
COPY --from=build /app/db ./db
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser
EXPOSE 5000
CMD ["npm", "start"]
