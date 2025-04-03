export interface authEntities {
  email: string;
  password: string;
}

export interface RefreshTokenEntities {
  id: number;
  userId: number | null;
  refreshToken: string;
  expiredAt: Date | null;
  createdAt: Date;
}

export interface RefreshTokenCreate {
  username: string | null;
  refreshToken: string;
  expiresAt: Date | undefined;
}
export interface RefreshTokenUpdate {
  refreshToken: string;
  expiresAt: Date | undefined;
}
