<script setup lang="ts"></script>

<template>
  <div class="py-6 mx-auto max-w-8">
    <div class="flex-table">
      <!--Table header-->
      <div class="flex-table-header">
        <span class="is-grow">User</span>
        <span>Location</span>
        <span>Industry</span>
        <span>Status</span>
        <span class="cell-end">Actions</span>
      </div>

      <div class="flex-list-inner">
        <!--Table item-->
        <div class="flex-table-item">
          <div class="flex-table-cell is-media is-grow">
            <img
              class="block size-44x44 is-circle no-m"
              src="https://dummyimage.com/150x150/ededed/000000"
              alt="table image"
            >
            <div>
              <span class="item-name dark-inverted">John Doe</span>
              <span class="item-meta">
                <span>Product Manager</span>
              </span>
            </div>
          </div>
          <div
            class="flex-table-cell"
            data-th="Location"
          >
            <span class="text-medium">New York, NY</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Industry"
          >
            <span class="text-light">Software</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Status"
          >
            <span class="tag is-success is-rounded">Online</span>
          </div>
          <div
            class="flex-table-cell cell-end"
            data-th="Actions"
          >
            <a class="is-pushed-mobile">Hire</a>
          </div>
        </div>

        <!--Table item-->
        <div class="flex-table-item">
          <div class="flex-table-cell is-media is-grow">
            <img
              class="block size-44x44 is-circle no-m"
              src="https://dummyimage.com/150x150/ededed/000000"
              alt="table image"
            >
            <div>
              <span class="item-name dark-inverted">John Doe</span>
              <span class="item-meta">
                <span>Product Manager</span>
              </span>
            </div>
          </div>
          <div
            class="flex-table-cell"
            data-th="Location"
          >
            <span class="text-medium">New York, NY</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Industry"
          >
            <span class="text-light">Software</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Status"
          >
            <span class="tag is-success is-rounded">Online</span>
          </div>
          <div
            class="flex-table-cell cell-end"
            data-th="Actions"
          >
            <a class="is-pushed-mobile">Hire</a>
          </div>
        </div>

        <!--Table item-->
        <div class="flex-table-item">
          <div class="flex-table-cell is-media is-grow">
            <img
              class="block size-44x44 is-circle no-m"
              src="https://dummyimage.com/150x150/ededed/000000"
              alt="table image"
            >
            <div>
              <span class="item-name dark-inverted">John Doe</span>
              <span class="item-meta">
                <span>Product Manager</span>
              </span>
            </div>
          </div>
          <div
            class="flex-table-cell"
            data-th="Location"
          >
            <span class="text-medium">New York, NY</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Industry"
          >
            <span class="text-light">Software</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Status"
          >
            <span class="tag is-success is-rounded">Online</span>
          </div>
          <div
            class="flex-table-cell cell-end"
            data-th="Actions"
          >
            <a class="is-pushed-mobile">Hire</a>
          </div>
        </div>

        <!--Table item-->
        <div class="flex-table-item">
          <div class="flex-table-cell is-media is-grow">
            <img
              class="block size-44x44 is-circle no-m"
              src="https://dummyimage.com/150x150/ededed/000000"
              alt="table image"
            >
            <div>
              <span class="item-name dark-inverted">John Doe</span>
              <span class="item-meta">
                <span>Product Manager</span>
              </span>
            </div>
          </div>
          <div
            class="flex-table-cell"
            data-th="Location"
          >
            <span class="text-medium">New York, NY</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Industry"
          >
            <span class="text-light">Software</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Status"
          >
            <span class="tag is-success is-rounded">Online</span>
          </div>
          <div
            class="flex-table-cell cell-end"
            data-th="Actions"
          >
            <a class="is-pushed-mobile">Hire</a>
          </div>
        </div>

        <!--Table item-->
        <div class="flex-table-item">
          <div class="flex-table-cell is-media is-grow">
            <img
              class="block size-44x44 is-circle no-m"
              src="https://dummyimage.com/150x150/ededed/000000"
              alt="table image"
            >
            <div>
              <span class="item-name dark-inverted">John Doe</span>
              <span class="item-meta">
                <span>Product Manager</span>
              </span>
            </div>
          </div>
          <div
            class="flex-table-cell"
            data-th="Location"
          >
            <span class="text-medium">New York, NY</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Industry"
          >
            <span class="text-light">Software</span>
          </div>
          <div
            class="flex-table-cell"
            data-th="Status"
          >
            <span class="tag is-success is-rounded">Online</span>
          </div>
          <div
            class="flex-table-cell cell-end"
            data-th="Actions"
          >
            <a class="is-pushed-mobile">Hire</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-table {
  &.is-compact {
    .flex-table-item {
      margin-bottom: 0;
      border-radius: 0;

      &:not(:last-child) {
        border-bottom: none;
      }

      &:nth-child(2) {
        border-radius: 8px 8px 0 0;
      }

      &:last-child {
        margin-bottom: 6px;
        border-radius: 0 0 8px 8px;
      }
    }
  }

  .flex-table-header {
    display: flex;
    align-items: center;
    padding: 0 10px;

    span {
      flex: 1 1 0;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--light-text);
      text-transform: uppercase;
      padding: 0 10px 10px;

      &.is-checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        max-width: 30px;

        .checkbox {
          padding: 0;

          > span {
            height: 22px;
          }
        }
      }

      &.cell-center {
        justify-content: center;
      }

      &.cell-end {
        justify-content: flex-end;
      }

      &.is-grow {
        flex-grow: 2;
      }

      &.is-grow-md {
        flex-grow: 3;
      }

      &.is-grow-lg {
        flex-grow: 4;
      }
    }
  }

  .flex-table-item {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: 60px;
    background: var(--white);
    border-radius: 8px;
    border: 1px solid var(--border);
    padding: 1rem;
    margin-bottom: 6px;

    &.is-row {
      border: none;
      background: transparent;
    }

    .flex-table-cell {
      flex: 1 1 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-family: var(--font);

      &.is-grow {
        flex-grow: 2;
      }

      &.is-grow-md {
        flex-grow: 3;
      }

      &.is-grow-lg {
        flex-grow: 4;
      }

      &.cell-center {
        justify-content: center;
      }

      &.cell-end {
        justify-content: flex-end;

        .button {
          &.has-dot {
            .dot {
              position: relative;
              top: 1px;
              font-size: 4px;
              margin: 0 6px;
            }
          }
        }

        .action-link {
          font-size: 0.9rem;
        }
      }

      &.is-bold {
        > span {
          font-family: var(--font-alt);
          font-size: 0.9rem;
          font-weight: 600;
        }
      }

      &.is-checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        max-width: 30px;

        .checkbox {
          padding: 0;
          margin-left: 4px;
        }
      }

      &.is-user,
      &.is-media {
        padding-left: 0;

        &.is-grow {
          flex-grow: 2;
        }

        &.is-grow-md {
          flex-grow: 3;
        }

        &.is-grow-lg {
          flex-grow: 4;
        }

        > div span:not(.avatar) {
          display: block;
          margin-left: 10px;
        }

        > div {
          line-height: 1.2;

          .item-name {
            font-family: var(--font-alt);
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--dark-text);
          }

          .item-meta {
            color: var(--light-text);

            svg {
              position: relative;
              top: 2px;
              height: 14px;
              width: 14px;
              stroke-width: 1.6px;
              margin-right: 4px;
            }

            span {
              display: inline-block;
              margin-left: 0;
              font-size: 0.9rem;
            }

            .flex-media {
              margin-left: 10px;
              margin-top: 4px;
            }

            .separator {
              padding: 0 8px;
            }
          }
        }

        .media {
          display: block;
          width: 100%;
          max-width: 130px;
          min-height: 95px;
          object-fit: cover;
          border-radius: 8px;
        }

        .cell-image {
          display: block;
          width: 100%;
          max-width: 80px;

          &.is-mini {
            max-width: 40px;
          }
        }
      }

      .cell-icon {
        margin-right: 4px;
        color: var(--light-text);
      }

      .tag {
        margin-bottom: 0 !important;
        line-height: 1.8;
        height: 1.8em;
      }

      .flex-media {
        display: flex;
        align-items: center;

        .meta {
          margin-left: 6px;
          line-height: 1.3;

          span {
            display: block !important;
            font-size: 0.8rem;
            color: var(--light-text);
            font-family: var(--font);
          }
        }
      }

      .dot-levels {
        display: flex;
        align-items: center;

        .dot {
          font-size: 8px;
          color: var(--light-text);
          margin: 0 6px;

          &.active {
            color: var(--primary);
          }
        }
      }

      > span:not(.tag) {
        font-family: var(--font);
        font-size: 0.95rem;
      }
    }
  }
}

@media (width <= 767px) {
  .flex-table-wrapper {
    .flex-table-toolbar {
      margin-bottom: 10px;

      .left {
        flex-grow: 2;
      }

      .right {
        display: none;
      }
    }

    .flex-table {
      .flex-table-header {
        .is-checkbox {
          display: none;
        }
      }

      .flex-table-item {
        padding-left: 0;
        padding-right: 0;

        .is-checkbox {
          display: none;
        }
      }
    }
  }

  .flex-table {
    .flex-table-header {
      display: none;
    }

    .flex-table-cell {
      position: relative;
      margin-bottom: 12px;

      &::before {
        content: attr(data-th);
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: 500;
        color: var(--medium-text);
      }

      &.no-label-mobile {
        &::before {
          display: none !important;
        }
      }

      &.cell-end {
        justify-content: flex-start !important;

        .btn-group {
          margin-left: auto;
        }
      }

      &.is-user {
        span {
          font-size: 1.2rem;
        }
      }

      > span,
      > .is-pushed-mobile {
        margin-left: auto;

        &.no-push {
          margin-left: 0 !important;
        }
      }
    }

    .flex-table-item {
      flex-direction: column;
      justify-content: center;
      width: 100% !important;
      padding: 20px;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      > div {
        border: none !important;
      }
    }
  }

  .pagination-next,
  .pagination-previous {
    &.has-chevron {
      min-width: 55px;
      max-width: 55px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .flex-table {
    .flex-table-cell {
      &.is-user {
        img {
          min-width: 50px;
        }
      }
    }
  }

  .pagination-next,
  .pagination-previous {
    &.has-chevron {
      min-width: 55px;
      max-width: 55px;
    }
  }

  .pagination-next {
    margin-right: auto;
  }
}
</style>
