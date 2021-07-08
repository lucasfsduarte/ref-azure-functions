import { Injectable, Logger } from '@nestjs/common'

import moment from 'moment'

@Injectable()
export class LoggerService {
  constructor(private logger: Logger) {}

  getCurrentTime() {
    return moment().format('DD/MM/YYYY HH:mm:ss')
  }

  // Logs a message to the stdout
  log(message: any) {
    this.logger.log(this.getCurrentTime() + ' - ' + message)
  }

  // TODO: You would like to use this service to connect to more elaborated log plugins
}
