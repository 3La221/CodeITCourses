FROM python:3.11.4-slim-buster
ENV PYTHONUNBUFFERED 1

# Install the required version of SQLite
# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libsqlite3-dev \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /backend

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip

# Create and activate a virtual environment
RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000
RUN python manage.py collectstatic --noinput
RUN python manage.py makemigrations
RUN python manage.py migrate

CMD ["gunicorn", "base.wsgi:application", "--bind", "0.0.0.0:8000"]
