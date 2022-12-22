import { Roles } from "../../context";

const JwtParse = (jwt: string) => {
  const role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
  const id = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';

  const jwtData = JSON.parse(atob(jwt));

	console.log(jwtData)
  return {
    exp: jwtData.exp,
    jwt: jwt,
    role: (jwtData[role]).toLowerCase() as Roles,
    userId: jwtData[id],
  };
};

export { JwtParse };
