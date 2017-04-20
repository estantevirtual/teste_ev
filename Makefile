setup:
	sudo docker build -t ev .
	sudo docker run -it --name 'desafio_ev' -p '3000:3000' -v "$(PWD)/code:/usr/src/app" ev
seed:
	sudo docker exec desafio_ev rails db:seed
rubocop:
	sudo docker exec desafio_ev rubocop app/models/ app/controllers/ spec/models
test:
	sudo docker exec desafio_ev rspec
