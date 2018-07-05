import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	root(): object {
		return {
			success: 200,
			data: 'Hello NestS',
		};
	}
}
