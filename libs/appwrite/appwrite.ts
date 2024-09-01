import { Client } from 'react-native-appwrite';
import { config } from './config';
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;