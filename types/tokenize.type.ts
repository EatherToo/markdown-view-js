import { TokenBuffer } from '../src/parser/tokenize/TokenBuffer';

export enum TokenType {
  None,
  Space,
  LineBreak,
  Indent,
  Text,
  TitlePrefix,
  OrderedListPrefix,
  UnorderedListPrefix,
}

export type TokenizeOptions = {
  tokenBuffer: TokenBuffer | null;
  position: number;
  tokenList: Token[];
  nextChar?: string;
  currentChar: string;
};

export type TokenizeFunc = (options: TokenizeOptions) => TokenBuffer;

export class Token {
  originText: string;
  position: number;
  type: TokenType;

  constructor(originText: string, position: number, type: TokenType) {
    this.originText = originText;
    this.position = position;
    this.type = type;
  }
  static _whiteSpaceType = [TokenType.Space, TokenType.Indent, TokenType.LineBreak];
  static isWhiteSpaceType(t: TokenType) {
    return Token._whiteSpaceType.includes(t);
  }
}
