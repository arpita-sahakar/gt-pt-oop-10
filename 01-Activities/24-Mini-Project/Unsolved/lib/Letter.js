class Letter {
  constructor(underLyingChar) {
    this.underLyingChar = underLyingChar;
    if (isLetterOrNum(this.underLyingChar)===true) {
      this.visible = false;
    }else{
      this.visible=true;
    }
  }
  getSolution() {
    if (this.visible === true) {
      return this.underLyingChar;
    } else {
      return "_";
    }
  }

  toString() {
    return "_";
  }

  guess(input) {
    if (input === this.underLyingChar) {
      this.visible = true;
      return true;
    } else {
      return false;
    }
  }
}

function isLetterOrNum(str) {
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

module.exports = Letter;
