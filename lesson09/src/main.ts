// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 65 })


// Required and Redonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc
    return assign
}

const assignVerified:Readonly<Assignment> = { ...assignGraded, verified: true }

recordAssignment({...assignGraded, verified: true})

// Record
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    greeen: '00FF00',
    blue: '0000FF'
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D'

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'B',
    Kelly: 'C'
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93},
    Kelly: { assign1: 85, assign2: 93}
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: 'K123',
    grade: 85,
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
    studentId: 'sdf',
    title: 'Final Project'
}

// Exclude and Extract

type adjstedGrade = Exclude<LetterGrades, "D">

type highGrades = Extract<LetterGrades, "A" | "B">

// nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NmaesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type NewAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility types", 100)
console.log(tsAssign)

// Parameters

type AssingParams = Parameters<typeof createNewAssign>

const assignArgs: AssingParams = ['generice', 100]

const tsAssign2: NewAssign = createNewAssign( ...assignArgs)

// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch (err => {
        if(err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then(users => console.log(users))