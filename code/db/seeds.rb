# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    run = HundredMeters.create(name: '100 metros rasos', unity: 's')
    javelin = JavelinThrow.create(name: 'Lançamento de Dardos', unity: 'm')

    semifinals = Competition.create(name: 'Semifinals', modality_id: javelin.id, starts_at: DateTime.now)
    semifinals.results << Result.create(athlete: 'Joao', value: 2.3)
    semifinals.results << Result.create(athlete: 'Joao', value: 2.4)
    semifinals.results << Result.create(athlete: 'Joao', value: 2.5)
    semifinals.results << Result.create(athlete: 'Pedro', value: 2.2)
    semifinals.results << Result.create(athlete: 'Pedro', value: 3.2)
    semifinals.results << Result.create(athlete: 'Pedro', value: 4.1)
    semifinals.results << Result.create(athlete: 'Jose', value: 4.3)
    semifinals.results << Result.create(athlete: 'Jose', value: 1.1)
    semifinals.results << Result.create(athlete: 'Jose', value: 2.2)


    finals = Competition.create(name: 'finals', modality_id: run.id, starts_at: DateTime.now)
    finals.results << Result.create(athlete: 'Tancredo', value: 40)
    finals.results << Result.create(athlete: 'Jose', value: 41)
    finals.results << Result.create(athlete: 'Fernando', value: 28)
    finals.results << Result.create(athlete: 'Itamar', value: 32)
    finals.results << Result.create(athlete: 'Fernando', value: 37)
    finals.results << Result.create(athlete: 'Luiz', value: 29)
    finals.results << Result.create(athlete: 'Michel', value: 30)
