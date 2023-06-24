Key Features:

- Google and Github authentication integration
- Credential authentication with NextAuth
- Message notifications and alerts
- Group chats and one-on-one messaging
- Message attachments and file sharing
- Online/offline user status
- Real-time messaging using Pusher
- Creating and managing chat rooms and channels
- Tailwind design UI and fully responsive
- Message seen updates
- File and image upload using Cloudinary CDN


### Install packages

```shell
npm i
```

### Setup .env file


```js
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_ID=
GITHUB_SECRET=

DATABASE_URL=
NEXTAUTH_SECRET=

PUSHER_SECRET=
PUSHER_APP_ID=
NEXT_PUBLIC_PUSHER_APP_KEY=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`
