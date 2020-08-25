import { Family } from "./family";
import { Member } from '../members/member';

// only for representative frontend. will be deleted soon.
export class FamiliesData {
  private static family: Family[] = [
    {
      _id: "id",
      name: "family name a",
      regDate: new Date().toLocaleString(),
      memberCount: 2,
      area: Family.Area.ANATOLIA,
      nation: Member.Nation.Syrian,
      address: "address1",
      registeredMember: "member1",
      status: Family.Status.UNAIDED,
      members: [{
        idNo: 1239,
        name: "namea",
        birthyear: 1999,
        gender: Member.Gender.MALE,
        job: "job1",
        income: 123,
        body: Family.Body.S,
        shoe: 41,
        disease: "engel1",
      },
      {
        idNo: 12329,
        name: "nameb",
        birthyear: 1999,
        gender: Member.Gender.FEMALE,
        job: "job2",
        income: 123,
        body: Family.Body.M,
        shoe: 41,
        disease: "engel2",
      }
      ],
      comment: "comment1",
      incomes: [{ name: "income1", amount: 100 }],
      educations: [{ name: "isim", school: "okul", grade: 5 }],
      outgoes: [{ name: "outgo1", amount: 200 }],
      bills: [{name: "bill1", contract: 100}]
    },
    {
      _id: "id",
      name: "family name b",
      regDate: new Date().toLocaleString(),
      memberCount: 3,
      area: Family.Area.EUROPE,
      address: "address1",
      registeredMember: "member2",
      nation: Member.Nation.Syrian,
      status: Family.Status.UNIDENTIFIED,
      comment: "comment2",
      members: [{
        idNo: 1239,
        name: "namea",
        birthyear: 1999,
        gender: Member.Gender.MALE,
        job: "job1",
        income: 123,
        body: Family.Body.S,
        shoe: 41,
        disease: "engel1",
      },
      {
        idNo: 12329,
        name: "nameb",
        birthyear: 1999,
        gender: Member.Gender.FEMALE,
        job: "job2",
        income: 123,
        body: Family.Body.M,
        shoe: 41,
        disease: "engel2",
      },
      ],
      incomes: [{ name: "income1", amount: 100 }],
      educations: [{ name: "isim", school: "okul", grade: 5 }],
      outgoes: [{ name: "outgo1", amount: 200 }],
      bills: [{name: "bill1", contract: 100}]
    },
  ];

  public static getData(): Family[] {
    return this.family;
  }
}
