import type { Node } from "src/class/NodeControl";
import NodeControl from "src/class/NodeControl";

export interface FileData {
  params?: {};
  content?: {};
}
export interface File {
  node: Node;
  data: FileData;
}

export interface Dir {
  node: Node;
  dirs: Dir[];
  files: File[];
}

export interface DirInfo {
  totalDirs: number;
  totalFiles: number;
  curDirs: number;
  curFiles: number;
}

export function filesInDirectory(dir: Dir): DirInfo {
  const dirCount = dir.dirs.length;
  const fileCount = dir.files.length;
  return {
    totalDirs:
      dirCount +
      dir.dirs.reduce((prev, cur) => {
        return prev + filesInDirectory(cur).totalDirs;
      }, 0),
    totalFiles:
      fileCount +
      dir.dirs.reduce((prev, cur) => {
        return prev + filesInDirectory(cur).totalFiles;
      }, 0),
    curDirs: dirCount,
    curFiles: fileCount,
  };
}
export function FileToString(file: File): string {
  return JSON.stringify({
    node: file.node.toString(),
    data: JSON.stringify(file.data),
  });
}
export function StringToFile(str: string): File {
  const parsed = JSON.parse(str);
  const file = <File>{
    node: NodeControl.fromString(parsed.node),
    data: parsed.data ? JSON.parse(parsed.data) : {},
  };
  return file;
}
