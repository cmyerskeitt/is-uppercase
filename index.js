String.prototype.isUpperCase = function() {
    console.log(this)
    if (this == this.toUpperCase()){
      return true
    } else {
      return false
    }
}