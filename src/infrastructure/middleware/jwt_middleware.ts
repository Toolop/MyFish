import { Response, Request, NextFunction } from "express";
import { VerifyJWTService } from "../../domain/service/jwt.service";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ status: "failed", message: "Token tidak ada" });
  }
  console.log(VerifyJWTService(token));
  if (VerifyJWTService(token)) {
    return res
      .status(401)
      .json({ status: "failed", message: "Token tidak valid" });
  }
  next();
};

export const checkPermission = (roleId: Number) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const userPermissions: Number = req.token.user.id;
      //   const roleImp = roleRepository(roleDbImp());
      //   const newRoleOnUser = roleOnUser(roleId, userPermissions);
      //   if ((await roleImp.findByPropertyRelation(newRoleOnUser)).length > 0) {
      //     return next();
      //   } else {
      //     return res.status(403).json({ error: "Access denied" });
      //   }
      // } catch (err) {
      //   return res.status(403).json({ error: "Access denied" });
      // }
    } catch (err: any) {}
  };
};
// export const CheckRole = (role: string) => {
//   // const token = req.header("Authorization");
//   // if (!token) {
//   //   return res.status(401).json({ message: "Token tidak ada" });
//   // }
//   // if (VerifyJWTService(token)) {
//   //   return res.status(403).json({ message: "Token tidak valid" });
//   // }
//   // next();
// };
