import {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {isEmpty} from 'lodash';

import TextInput from 'components/common/TextInput';
import TextAreaInput from 'components/common/TextAreaInput';
import NumberInput from 'components/common/NumberInput';
import SelectInput from 'components/common/SelectInput';

interface Props {
  visible: boolean;
  movie: Movie;
  genres: string[];
  save: () => void;
  close: () => void;
  onChange: (field: string, value: any) => void;
}

function EditMovie({visible, movie, genres, onChange, close, save}: Props) {
  const [options, setOptions] = useState<BasicOption[]>([]);
  const [errors, setErrors] = useState({title: '', year: '', runtime: '', director: '', actors: ''});

  useEffect(() => {
    const genresOptions = genres.map(genre => {
      return {value: genre, label: genre};
    });
    setOptions(genresOptions);
  }, [genres]);

  function isEmptyErrorObject(obj: any) {
    let isEmptyObject = true;

    for (const key of Object.keys(obj)) {
      const value = obj[key];

      if (!isEmpty(value)) {
        isEmptyObject = false;
        break;
      }
    }

    return isEmptyObject;
  }

  function formIsValid() {
    const formErrors = {
      title: '',
      year: '',
      runtime: '',
      director: '',
      actors: ''
    };

    if (!movie.title) {
      formErrors.title = 'El campo Título es requerido.';
    }

    if (!movie.year) {
      formErrors.year = 'El campo Año es requerido.';
    } else if (movie.year < 1900 || movie.year > 2050) {
      formErrors.year = 'Valor de año inválido (debe estar entre 1900 y 2050).';
    }

    if (!movie.runtime) {
      formErrors.runtime = 'El campo Duración es requerido.';
    }

    if (!movie.director) {
      formErrors.director = 'El campo Director es requerido.';
    }

    if (!movie.actors) {
      formErrors.actors = 'El campo Actores es requerido.';
    }

    setErrors(formErrors);

    return isEmptyErrorObject(formErrors);
  }

  function onSave() {
    if (!formIsValid()) return;

    save();
  }

  function render() {
    const selectedGenres = options.filter(option => {
      return movie.genres.indexOf(option.value) !== -1;
    });

    return (
      <div>
        <Modal show={visible} onHide={close}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>Edit movie</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <TextInput
              name="title"
              label="Título"
              value={movie.title}
              onChange={onChange}
              placeholder="Título"
              error={errors.title}
            />

            <NumberInput name="year" label="Año" value={movie.year} onChange={onChange} error={errors.year} />

            <NumberInput
              name="runtime"
              label="Duracion"
              value={movie.runtime}
              onChange={onChange}
              error={errors.runtime}
            />

            <SelectInput name="genres" label="Generos" options={options} value={selectedGenres} onChange={onChange} />

            <TextInput
              name="director"
              label="Director"
              value={movie.director}
              onChange={onChange}
              placeholder="Director"
              error={errors.director}
            />

            <TextAreaInput
              name="actors"
              rows={2}
              label="Actores"
              value={movie.actors}
              onChange={onChange}
              placeholder="Actores"
              error={errors.actors}
            />

            <TextAreaInput
              name="plot"
              rows={4}
              label="Argumento"
              value={movie.plot}
              onChange={onChange}
              placeholder="Argumento"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onSave}>Guardar</Button>
            <Button variant="secondary" onClick={close}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  return render();
}

export default EditMovie;
