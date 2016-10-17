# Pulsar

Pulsar is a distributed pub-sub messaging platform with a very
flexible messaging model and an intuitive client API.

## Main features
* Horizontally scalable (Millions of independent topics and millions
  of messages published per second)
* Strong ordering and consistency guarantees
* Low latency durable storage
* Topic and queue semantics
* Load balancer
* Designed for being deployed as a hosted service:
  * Multi-tenant
  * Authentication
  * Authorization
  * Quotas
  * Support mixing very different workloads
  * Optional hardware isolation
* Keeps track of consumer cursor position
* REST API for provisioning, admin and stats
* Geo replication
* Transparent handling of partitioned topics
* Transparent batching of messages

## Documentation

* [Getting Started](docs/GettingStarted.md)
* [Architecture](docs/Architecture.md)
* [Documentation Index](docs/Documentation.md)

## Contact
* [Pulsar-Dev](https://groups.google.com/d/forum/pulsar-dev) for
  development discussions
* [Pulsar-Users](https://groups.google.com/d/forum/pulsar-users) for
  users questions

## License

Copyright 2016 Yahoo Inc.

Licensed under the Apache License, Version 2.0: [http://www.apache.org/licenses/LICENSE-2.0]()
