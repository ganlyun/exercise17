/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    if(this.observerList.indexOf(observer)==-1) this.observerList.push(observer);
  }
  remove(observer) {
    // todo remove observer from list
    if(this.observerList.indexOf(observer)>-1) this.observerList.splice(this.observerList.indexOf(observer),1);
  }
  count() {
    // return observer list size
    return this.observerList.length;
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
    this.observers.add(observer);
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer)
  }
  notify(...args) {
    // todo notify
    this.observers.observerList.forEach((o)=>{
      o.update(...args)
    })
  }
}

module.exports = { Subject };
