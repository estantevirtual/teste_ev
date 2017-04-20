namespace :rabbitmq do
  desc "Setup Bindings"
  task :setup do
    require "bunny"

    # conn = Bunny.new(host: 'rabbit')
    # conn.start
    #
    # ch = conn.create_channel
    #
    # # x = ch.fanout('sms.messages')
    # # dlx = ch.fanout('worker.messages-retry')
    # # ch.queue('worker.messages', durable: true, arguments: {'x-dead-letter-exchange' => dlx.name}).bind(x)
    #
    # conn.close
  end
end
