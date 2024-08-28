# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libsqlite3-dev \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Install SQLite 3.31 or later
RUN wget https://www.sqlite.org/2023/sqlite-autoconf-3410000.tar.gz && \
    tar xzf sqlite-autoconf-3410000.tar.gz && \
    cd sqlite-autoconf-3410000 && \
    ./configure && \
    make && \
    make install && \
    cd .. && \
    rm -rf sqlite-autoconf-3410000 sqlite-autoconf-3410000.tar.gz

# Verify SQLite version
RUN sqlite3 --version

# Create and set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app/

# Expose the port the app runs on
EXPOSE 8000

# Collect static files
RUN python manage.py collectstatic --noinput

# Make and apply migrations
RUN python manage.py makemigrations
RUN python manage.py migrate

# Run the application with Gunicorn
CMD ["gunicorn", "base.wsgi:application", "--bind", "0.0.0.0:8000"]