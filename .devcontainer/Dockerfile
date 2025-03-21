FROM node:20

# Install basic development tools
RUN apt update && apt install -y less git procps

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `SHELL` so it'll run in Linux
ENV SHELL=/bin/bash

# Set working directory
WORKDIR /workspace

USER node 