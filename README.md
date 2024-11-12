Weather App Challenge

## Getting Started

First, duplicate your local env file base on `.env.example` then create the file `.env` and replace with your value

Then, run to install the module
```bash
yarn
```

Finally, run the development server:

```bash
yarn dev
```

## Structure

- components: where contain all the shares component ( please following as [Atoms design pattern](https://atomicdesign.bradfrost.com/chapter-2))
- constants: where contain all the share variables during application
(https://redux-toolkit.js.org), but we still can replace with any others library and putting here )
- hooks: where contain custom hooks
  - we will follow the structure when separate base on module. Example
    - commons: where contain all the global hooks: useModal, useNavigation, useQuery, etc
    - [module]: like jobs where contain: useJobsColumn, useJobsData, useJobDetail, etc
  - Then the structure will be
    ```
    hooks
      commons
        useModal
        useQuery
        useNavigtion
      jobs
        useJobsColumn
        useJobsData
        useJobDetail
      ```
- services: where storing all the services