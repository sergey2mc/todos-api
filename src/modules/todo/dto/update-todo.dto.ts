import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly text: string;
}
