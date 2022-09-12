/* exported defaults */

// 1) Check each property in (source) object input
//    1a) Check if current property is already in (target) object input
//        1aa) Assign current (source) value to (target) property

function defaults(target, source) {
  for (var property in source) {
    if (!(property in target)) {
      target[property] = source[property];
    }
  }
}
