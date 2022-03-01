import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public create(createUserDto): any {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  public findAll(): any {
    return this.userModel.find().exec();
  }

  public update(query, newObj): any {
    return this.userModel.findOneAndUpdate(query, newObj, { new: true });
  }

  public destroy({ name }): any {
    return this.userModel.deleteOne({ name });
  }
}
