
export class DefaultClass {
    constructor(){
        console.log("Definition class");
    }

    // element_listの最初の要素の位置へwrapperでelement_listを包んだ要素を挿入
    wrapAll(element_list, wrapper) {

        if (!element_list) return false;

        let first_element = element_list[0];

        first_element.parentNode.insertBefore(wrapper, first_element);

        Array.prototype.forEach.call(element_list, (element) => {
            wrapper.appendChild(element);
        });
        
        return true;
    }

    //targetの要素を削除し、その子要素を取り出す
    unwrap(target) {
        if(!target) return false;
        while (target.firstChild) {
            target.parentNode.insertBefore(target.firstChild, target);
        }
        target.remove();
        return true;
    }
}
