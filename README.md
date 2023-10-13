# INIT Dashboards

INIT Dashboards serves as a dedicated website for hosting organization information ranging from upcoming events, program updates, job positings, and more!

## Initialization

Make sure the most recent version of [NodeJS](https://nodejs.org/en) is installed on your local device.

1. Clone the repo.

```bash
git clone https://github.com/dabarcenas6921/init-dashboard.git
```

2. Install the necessary dependencies

```bash
npm install
```

3. Add required environment variables to a local `.env` file at the root of your local instance. 

    - NOTE: Refer to the team if they are unknown or access is required.

4. Initialize Prisma Database
```bash
npx prisma db push
```

## Pull Requests

### Branching
1. Ensure you are up-to-date with main:
```bash
git pull
```
2. Create a new remote branch for any new changes.
```bash
git checkout -b <branch-name>
```

- Switch between branches:
```bash
git switch <branch-name>
```

### Creating a Merge Request
1. Stage changes:
```bash
git add <file-name>
```
OR (to stage all changes):
```bash
git add .
```

2. Set a commit message.
```bash
git commit -m "<message>"
```

3. Create merge request
```bash
git push origin
```

- NOTE: An approval of the changes is required before completing the merge.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.