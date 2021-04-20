import { Family } from "./family";

// only for representative frontend. will be deleted soon.
export class FamiliesData {
  private static family: Family[] = [
    {
      _id: "id123",
      clerk: "member1",
      name: "family1",
      idNumber: 123,
      telephone: 1234,
      rent: 123,
      regDate: new Date().toLocaleString().split(",")[0],
      warmingType: Family.WarmingType.NATURAL_GAS,
      address: "address1",
      district: "discrict1",
      nation: "nation1",
      status: Family.Status.NOT_QUESTIONED,
      budgets: [{ name: "budget1", amount: 100, type: Family.BudgetType.BILL }],
      members: [{
        idNo: 123,
        name: "name1ablaskdflasdlfkasd",
        birthyear: 1999,
        gender: Family.Gender.MAN,
        job: "job1",
        income: 100,
        size: "size1",
        shoe: 40,
        disease: "disease1",
        note: "note1",
        school: "school1",
        grade: "grade1",
        kinship: "kinship1"
      },
      {
        idNo: 123,
        name: "name2",
        birthyear: 1999,
        gender: Family.Gender.WOMAN,
        job: "job2",
        income: 200,
        size: "size2",
        shoe: 30,
        disease: "disease2",
        note: "note2",
        school: "school2",
        grade: "grade2",
        kinship: "kinship2"
      },
      {
        idNo: 123,
        name: "name2",
        birthyear: 1999,
        gender: Family.Gender.WOMAN,
        job: "job2",
        income: 200,
        size: "size2",
        shoe: 30,
        disease: "disease2",
        note: "note2",
        school: "school2",
        grade: "grade2",
        kinship: "kinship2"
      },
      {
        idNo: 123,
        name: "name2",
        birthyear: 1999,
        gender: Family.Gender.WOMAN,
        job: "job2",
        income: 200,
        size: "size2",
        shoe: 30,
        disease: "disease2",
        note: "note2",
        school: "school2",
        grade: "grade2",
        kinship: "kinship2"
      },
      ],
      needs: [{ name: "need1" }, { name: "need2" }],
      notes: [
        {
          statement: "statement1",
          members: "member1, member2, member3",
          rating: Family.Rating.GOOD
        },
      ],
      images: []
    },
    {
      _id: "id123",
      clerk: "member2",
      name: "family2",
      idNumber: 123,
      telephone: 123,
      rent: 123,
      regDate: new Date().toLocaleString().split(",")[0],
      warmingType: Family.WarmingType.NATURAL_GAS,
      address: "address2",
      district: "discrict2",
      nation: "nation2",
      status: Family.Status.NOT_QUESTIONED,
      budgets: [],
      members: [{
        idNo: 123,
        name: "name1",
        birthyear: 1999,
        gender: Family.Gender.MAN,
        job: "job1",
        income: 100,
        size: "size1",
        shoe: 40,
        disease: "disease1",
        note: "note1",
        school: "school1",
        grade: "grade1",
        kinship: "kinship1"
      },
      {
        idNo: 123,
        name: "name2",
        birthyear: 1999,
        gender: Family.Gender.WOMAN,
        job: "job2",
        income: 200,
        size: "size2",
        shoe: 30,
        disease: "disease2",
        note: "note2",
        school: "school2",
        grade: "grade2",
        kinship: "kinship2"
      },
      ],
      needs: [{ name: "need1" }, { name: "need2" }],
      notes: [
        {
          statement: "statement1",
          members: "member1, member2, member3",
          rating: Family.Rating.GOOD
        },
      ],
      images: []
    },
  ];

  public static getData(): Family[] {
    return this.family;
  }
}
