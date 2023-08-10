import { EventPattern, Payload } from "@nestjs/microservices";
import { KafkaMessage } from "./KafkaMessage";

export class KafkaController {
  @EventPattern("topic1")
  async onTopic1(
    @Payload()
    message: KafkaMessage
  ): Promise<void> {}
}
