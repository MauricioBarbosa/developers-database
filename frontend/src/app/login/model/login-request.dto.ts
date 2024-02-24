export class LoginRequestDto {
  constructor(
    public username: string,
    public password: string,
    public keepMeConnected: boolean,
  ) {
    Object.assign(this);
  }
}
