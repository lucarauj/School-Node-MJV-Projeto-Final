import { Employee } from "../models/employee.model";
import { IEmployee } from "../models/employee.model";

class EmployeeRepository {
    getAll() {
        return Employee.find();
    }

    getByMatricula(matricula: string) {
        return Employee.findOne({matricula: matricula});
    }

    create(employee: IEmployee) {
        return Employee.create(employee);
    }

    update(matricula: string, employee: Partial<IEmployee>) {
        return Employee.updateOne({matricula: matricula}, {$set: employee});
    }

    remove(matricula: string) {
        return Employee.deleteOne({matricula: matricula});
    }
}

export default new EmployeeRepository();