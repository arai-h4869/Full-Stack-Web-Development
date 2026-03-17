FROM mcr.microsoft.com/devcontainers/python:2-3.13-trixie

RUN rm -f /etc/apt/sources.list.d/yarn.list \
  && apt-get update \
  && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    make \
  && rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install --upgrade pip \
  && pip install uv

ENV DEVCONTAINER=true
