
function insertSort(arr) {

    var temp;
    var j;
    for (i = 1; i < arr.length; i++) {
        temp = arr[i];
        j = i;
        while (j >= 0 && temp < arr[j - 1]) {
            var t = arr[j - 1];
            arr[j - 1] = temp;
            arr[j] = t;
            j--;
        }
    }

}
var a = [2, 3, 1, 1,6, 5, 10]

insertSort(a);