# PostgreSQL Setup and Management

## Installation

### Ubuntu
```sh
sudo apt update
sudo apt install postgresql postgresql-contrib
```

### macOS
```sh
brew update
brew install postgresql
brew services start postgresql
```

### Windows
1. Download the installer from [PostgreSQL official website](https://www.postgresql.org/download/windows/).
2. Run the installer and follow the setup wizard.

## Setup

### Start PostgreSQL Service
```sh
sudo service postgresql start
```

### Access PostgreSQL Prompt
```sh
sudo -u postgres psql
```

### Create a New Database
```sql
CREATE DATABASE mydatabase;
```

### Create a New User
```sql
CREATE USER myuser WITH PASSWORD 'mypassword';
```

### Grant Privileges
```sql
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
```

## Backup and Restore

### Backup a Database
```sh
pg_dump mydatabase > mydatabase_backup.sql
```

### Restore a Database
```sh
psql mydatabase < mydatabase_backup.sql
```

### Backup a Table
```sh
pg_dump -t mytable mydatabase > mytable_backup.sql
```

### Restore a Table
```sh
psql mydatabase < mytable_backup.sql
```

## Extensions

### Common Extensions
- `pgcrypto`: Provides cryptographic functions.
- `uuid-ossp`: Generates universally unique identifiers (UUIDs).

### Installing Extensions
```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

### Note
Extensions like `pgcrypto` and `uuid-ossp` are generally safe and should not cause issues during backup and restore operations.
