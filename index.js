import {
  appendFile,
  readFile,
  writeFile,
  copyFile,
  rm,
  mkdir,
  rmdir
} from "node:fs/promises";
import { join } from "node:path";

function createPathString(path) {
  return Array.isArray(path) ? join.apply(null, path) : path;
}

const encoding = "utf8";
function normalizeOptions(options) {
  if (typeof options === "object" && !options.encoding) {
    options.encoding = encoding;
  }
  return options;
}

export function append(path, content, options = encoding) {
  return appendFile(createPathString(path), content, normalizeOptions(options));
}

export function read(path) {
  return readFile(createPathString(path), "utf8");
}

export function write(path, content, options = encoding) {
  return writeFile(createPathString(path), content, normalizeOptions(options));
}

export function copy(fromPath, toPath) {
  return copyFile(createPathString(fromPath), createPathString(toPath));
}

export function remove(path) {
  return rm(createPathString(path), { force: true });
}

export function makeDir(path) {
  return mkdir(createPathString(path), { recursive: true });
}

export function removeDir(path) {
  return rmdir(createPathString(path));
}
