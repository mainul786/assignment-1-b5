What are some differences between interfaces and types in TypeScript?
interface using i can declare a object interface. we can extend interface. interface can use object.

interface Student {
name: string;
age: number;
class: number;
}

type use premitive data type and array, object type extend using intersection

type student = {
name:string;
age:number
}

What is type inference in TypeScript? Why is it helpful?
Type inference means TypeScript can automatically guess the type of a variable or value without you writing it explicitly.

why is is helpful?
less code, catch error
