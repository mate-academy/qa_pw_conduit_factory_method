import * as fs from 'fs';
import dotenv from 'dotenv';

export function loadEnvFile(envType) {
  if (!envType || typeof envType !== 'string') {
    throw new Error('The envType parameter is missing or invalid.');
  }

  const envFolderPath = './env';
  const envFilePath = `${envFolderPath}/.env.${envType}`;

  if (!fs.existsSync(envFilePath)) {
    throw new Error(`Missing the config file ${envFilePath}`);
  }

  const result = dotenv.config({ path: envFilePath });
  if (result.error) {
    throw new Error(`Failed to load ${envFilePath}: ${result.error.message}`);
  }
}

export function throwMissingEnvTypeError() {
  throw new Error(
    'The ENV_TYPE is undefined. Check the ENV_TYPE env variable is set.',
  );
}
