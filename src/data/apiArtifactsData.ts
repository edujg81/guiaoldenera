import rawArtifacts from './generated/api/artifacts.json';
import type { ApiArtifact } from '../types-api';

export const API_ARTIFACTS_DATA =
  rawArtifacts as ApiArtifact[];