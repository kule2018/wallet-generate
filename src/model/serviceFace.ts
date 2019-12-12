import { EntityConfig } from "../types";
import { humpToUperCase, tplfile, toLowcase } from "../utils";

/**
 * 创建请求接口代码
 * @description
 * ServerName 服务名称, 比如 boss
 * EntityName 实体名称
 * EntityDesc 实体说明
 * EntityVariableName 实体变量名称,一般是实体类型的首字母小写
 * @param config 实体配置
 */
export default function makeServiceFace(config: EntityConfig) {
    const { entity } = config;

    const params = {
        ServerName: config["server-name"],
        TableName: humpToUperCase(entity.name),
        EntityName: entity.name,
        EntityDesc: entity.description,
        EntityVariableName: toLowcase(entity.name),
    };

    const code = tplfile("service-face", params);
    return code;
}
