class A {
  @publish('a')
  go() {
    console.log('gogogogo');
  }
}

const ee = new (require('events').EventEmitter)();

ee.on('a', () => {
  console.log('被触发le1');
})

function publish(args) {
  return function(target, name, desc) {
    const oldValue = desc.value;
    desc.value = function() {
      ee.emit(args);
      return oldValue.apply(this, arguments);
    }
    return desc;
  }
}

const a = new A();
a.go();