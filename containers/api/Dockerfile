FROM python:3.7.2-slim

RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean

RUN pip install -U pip
RUN pip install pipenv

WORKDIR /app
COPY . /app

RUN pipenv install --system

CMD flask run --host=0.0.0.0
