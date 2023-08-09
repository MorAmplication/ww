import { EventPattern, Payload } from "@nestjs/microservices";

export class KafkaController {
  @EventPattern("topic1")
  async ontopic1(message: Any): Promise<void> {}
}
