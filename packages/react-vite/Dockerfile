# syntax=docker/dockerfile:experimental

ARG UBUNTU_VERSION=20.04

FROM ubuntu:${UBUNTU_VERSION}

WORKDIR /usr/src/app

ENV DEBIAN_FRONTEND noninteractive

RUN apt -yqq update && apt -yqq install \
  git curl wget software-properties-common unzip \
  apt-transport-https ca-certificates gnupg \
  --no-install-recommends

# Git
RUN add-apt-repository -y ppa:git-core/ppa

# Volta (Node Version Manager)
SHELL ["/bin/bash", "-c"]

ENV BASH_ENV ~/.bashrc
ENV VOLTA_HOME /root/.volta
ENV PATH $VOLTA_HOME/bin:$PATH

RUN curl https://get.volta.sh | bash
RUN volta install node

# Google Cloud SDK
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" \
  | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg \
  | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

# Install all packages
RUN apt -yqq update && apt -yqq install \
  git vim jq google-cloud-sdk \
  --no-install-recommends

COPY . .

RUN yarn install --non-interactive --frozen-lockfile

ENTRYPOINT [""]