import { Member } from "./member";
import { Status } from '../../@core/data/status';

// only for representative frontend. will be deleted soon.
export class MembersData {
  private static members: Member[] = [
    {
      _id: "id",
      name: "member name a",
      regDate: new Date().toLocaleString(),
      unregDate: new Date().toLocaleString(),
      status: Status.ACTIVE,
      group: Member.Group.ACTIVE,
      telephone: 12345678911,
      address: "address1",
      area: "test",
      gender: Member.Gender.FEMALE,
      job: "job b",
      birthday: new Date().toLocaleString(),
      birthplace: "İstanbul",
      idNo: 12345678900,
      fatherName: "Baba",
      motherName: "Anne",
      nation: Member.Nation.Turk,
      maritalStatus: Member.MaritalStatus.Single,
      bloodType: Member.BloodType.APositive,
      email: "ornek@mail.com",
      education: Member.Education.Undergraduate,
      workplace: "Örnek İş Yeri",
      registeredProvince: "Zonguldak",
      committee: Member.Committee.Identification
    },
    {
      _id: "id",
      name: "member name b",
      regDate: new Date().toLocaleString(),
      unregDate: new Date().toLocaleString(),
      status: Status.ACTIVE,
      group: Member.Group.ACTIVE,
      telephone: 12345678911,
      address: "address2",
      area: "test",
      gender: Member.Gender.MALE,
      job: "job a",
      birthday: new Date().toLocaleString(),
      birthplace: "Kocaeli",
      idNo: 12345678900,
      fatherName: "Baba",
      motherName: "Anne",
      nation: Member.Nation.Turk,
      maritalStatus: Member.MaritalStatus.Single,
      bloodType: Member.BloodType.APositive,
      email: "ornek2@mail.com",
      education: Member.Education.Undergraduate,
      workplace: "İş Yeri Örnek",
      registeredProvince: "Bartın",
      committee: Member.Committee.Identification
    },
  ];

  public static getData(): Member[] {
    return this.members;
  }
}
