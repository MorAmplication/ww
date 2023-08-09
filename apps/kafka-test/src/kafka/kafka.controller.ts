import { EventPattern, Payload } from "@nestjs/microservices";

export class KafkaController {
  @EventPattern("topic1")
  async onTopic1(message: any): Promise<void> {}
}
