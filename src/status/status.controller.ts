import { Controller, Get } from '@nestjs/common';

@Controller('status')
export class StatusController {
    @Get()
    getAppStatus():string{
        return 'App is online'
    }
}
