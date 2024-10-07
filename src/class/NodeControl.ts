//TODO : A node should be linked from root
// hard-coded path will not work efficiently

import { getProcessCommandsIcon } from "../clientutils";
import Path from "./Path";

// ex) when a directory is renamed, its containing dirs and files must be renamed too, which will conclude in disefficiency
export interface Node {
  id: string;
  path: string;
  type: string;
  exeCmd: string;
  iconPath: string;
}

export default class NodeControl {
  //TODO : node.data & file.data?
  public static build(
    path: string,
    type: string,
    exeCmd?: string,
    iconPath?: string,
    data?: {},
  ) {
    return {
      id: type + path,
      path: path,
      type: type,
      exeCmd: exeCmd ?? this._setDefaultCmd(new Path(path), type),
      iconPath: iconPath ?? getProcessCommandsIcon(type),
      data: data ?? {},
    };
  }

  public static fromString(str: string) {
    try {
      return <Node>JSON.parse(str);
    } catch (error) {
      Log.error(error);
      return undefined;
    }
  }
  public static toString = (node: Node): string => {
    return JSON.stringify(node);
  };

  private static _setDefaultCmd(path: Path, type: string): string {
    let retval = type;
    switch (type) {
      case "dir":
        retval = `finder ${path.path}`;
        break;
      case "text":
        retval = `notepad ${path.path}`;
        break;
      case "image":
        retval = `viewer ${path.path}`;
        break;
    }
    return retval;
  }
  public static isSame(lhs: Node, rhs: Node) {
    return lhs.id === rhs.id;
  }
} //!Node
