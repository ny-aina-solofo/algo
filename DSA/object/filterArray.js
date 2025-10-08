function filterArray(array,id_subtask) {
    const filteredArray = array.filter(a => a.id_subtask !== id_subtask);
    console.log(filteredArray)
    return filteredArray
}

filterArray([
    {
      done: false,
      id_task: 20,
      libelle: "Account page",
      id_subtask: 23
    },
    {
      done: false,
      id_task: 20,
      libelle: "Billing page",
      id_subtask: 24
    }
],24)