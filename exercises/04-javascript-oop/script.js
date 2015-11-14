function extend(baseObj, extendObj) {
    for (var item in extendObj) {
        if (extendObj.hasOwnProperty(item)) {
            if (Array.isArray(extendObj[item])) {
                baseObj[item] = extend([], extendObj[item]);
            } else if (extendObj[item] !== null && typeof extendObj[item] === 'object') {
                baseObj[item] = extend({}, extendObj[item]);
            } else {
                baseObj[item] = extendObj[item];
            }
        }
    }

    return baseObj;
}

var Class = {};

Class.create = function classCreate(classProperties) {
    function ClassFunc() {
        if (ClassFunc.prototype.init) {
            ClassFunc.prototype.init.apply(this, arguments);
        }
    }

    ClassFunc.prototype = extend({}, classProperties);
    ClassFunc.prototype.constructor = ClassFunc;

    return ClassFunc;
};

Class.extend = function classExtend(parentClass, classProperties) {
    var classProto = extend({}, classProperties);

    function ClassFunc() {
        if (ClassFunc.prototype.init) {
            ClassFunc.prototype.init.apply(this, arguments);
        }
    }

    ClassFunc.prototype = Object.create(parentClass.prototype);
    ClassFunc.prototype.constructor = ClassFunc;

    for (var property in classProto) {
        ClassFunc.prototype[property] = classProto[property];
    }

    return ClassFunc;
};