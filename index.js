// Write your solution in this file!
let employee = {
    name: 'Kisuri',
    streetAddress: '11 Broadway'
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee, [key]: value}
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

deleteFromEmployeeByKey = (employee, key, value) => {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

destructivelyDeleteFromEmployeeByKey = (employee, key, value) => {
    delete employee[key]
    return employee
}
